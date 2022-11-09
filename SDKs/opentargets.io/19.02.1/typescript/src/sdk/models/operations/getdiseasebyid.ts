import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDiseaseByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=disease" })
  disease: string;
}


export class GetDiseaseByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDiseaseByIdPathParams;
}


export class GetDiseaseByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
