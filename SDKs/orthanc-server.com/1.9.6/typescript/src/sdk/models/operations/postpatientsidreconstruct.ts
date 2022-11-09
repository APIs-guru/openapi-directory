import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdReconstructPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdReconstructRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdReconstructPathParams;
}


export class PostPatientsIdReconstructResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
