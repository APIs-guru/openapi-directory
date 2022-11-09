import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterGroupsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterGroupsReadPathParams;
}


export class VirtualizationClusterGroupsReadResponse extends SpeakeasyBase {
  @Metadata()
  clusterGroup?: shared.ClusterGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
