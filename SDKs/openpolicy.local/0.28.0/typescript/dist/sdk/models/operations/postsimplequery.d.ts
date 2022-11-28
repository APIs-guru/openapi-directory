import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSimpleQueryQueryParams extends SpeakeasyBase {
    pretty?: boolean;
}
export declare class PostSimpleQueryRequest extends SpeakeasyBase {
    queryParams: PostSimpleQueryQueryParams;
    request: Map<string, any>;
}
export declare class PostSimpleQueryResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
}
