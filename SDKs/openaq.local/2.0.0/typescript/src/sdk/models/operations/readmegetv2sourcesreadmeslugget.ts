import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReadmeGetV2SourcesReadmeSlugGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class ReadmeGetV2SourcesReadmeSlugGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReadmeGetV2SourcesReadmeSlugGetPathParams;
}


export class ReadmeGetV2SourcesReadmeSlugGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  readmeGetV2SourcesReadmeSlugGet200ApplicationJsonAny?: any;
}
