import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClustersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClustersReadPathParams;
}


export class VirtualizationClustersReadResponse extends SpeakeasyBase {
  @Metadata()
  cluster?: shared.Cluster;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
