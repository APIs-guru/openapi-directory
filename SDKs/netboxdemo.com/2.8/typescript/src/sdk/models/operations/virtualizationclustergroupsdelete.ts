import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationClusterGroupsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterGroupsDeletePathParams;
}


export class VirtualizationClusterGroupsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
