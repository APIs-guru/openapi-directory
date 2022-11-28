import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiseaseByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disease" })
  disease: string;
}


export class GetDiseaseByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDiseaseByIdPathParams;
}


export class GetDiseaseByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
