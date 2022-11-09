import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReadmeGetV2SourcesReadmeSlugGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class ReadmeGetV2SourcesReadmeSlugGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReadmeGetV2SourcesReadmeSlugGetPathParams;
}


export class ReadmeGetV2SourcesReadmeSlugGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  readmeGetV2SourcesReadmeSlugGet200ApplicationJsonAny?: any;
}
