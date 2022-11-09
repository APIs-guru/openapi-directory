import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LearnablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=learnable" })
  learnable: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class LearnableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LearnablePathParams;
}


export class LearnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
