import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMappingRequest extends SpeakeasyBase {
    request?: shared.MappingJob[];
}
export declare class PostMappingResponse extends SpeakeasyBase {
    bulkMappingJobResult?: any[];
    contentType: string;
    postMapping400WildcardString?: string;
    postMapping401WildcardString?: string;
    postMapping406WildcardString?: string;
    postMapping413WildcardString?: string;
    postMapping500WildcardString?: string;
    statusCode: number;
}
