import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadmeGetV2SourcesReadmeSlugGetPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class ReadmeGetV2SourcesReadmeSlugGetRequest extends SpeakeasyBase {
    pathParams: ReadmeGetV2SourcesReadmeSlugGetPathParams;
}
export declare class ReadmeGetV2SourcesReadmeSlugGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    readmeGetV2SourcesReadmeSlugGet200ApplicationJsonAny?: any;
}
