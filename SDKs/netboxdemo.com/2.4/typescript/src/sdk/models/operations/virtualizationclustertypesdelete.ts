import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationClusterTypesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterTypesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterTypesDeletePathParams;
}


export class VirtualizationClusterTypesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
