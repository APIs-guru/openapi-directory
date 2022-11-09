import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasTopologyMapsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTopologyMapsDeletePathParams;
}


export class ExtrasTopologyMapsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
