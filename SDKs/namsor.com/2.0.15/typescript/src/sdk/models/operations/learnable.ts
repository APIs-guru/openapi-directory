import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LearnablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=learnable" })
  learnable: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class LearnableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LearnablePathParams;
}


export class LearnableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
