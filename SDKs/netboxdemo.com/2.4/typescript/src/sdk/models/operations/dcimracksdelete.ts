import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRacksDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRacksDeletePathParams;
}


export class DcimRacksDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
