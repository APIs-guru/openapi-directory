import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStrainByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetStrainByRgdIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStrainByRgdIdUsingGetPathParams;
}


export class GetStrainByRgdIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
