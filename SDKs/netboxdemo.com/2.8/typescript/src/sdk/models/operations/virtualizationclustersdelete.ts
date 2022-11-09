import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationClustersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClustersDeletePathParams;
}


export class VirtualizationClustersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
