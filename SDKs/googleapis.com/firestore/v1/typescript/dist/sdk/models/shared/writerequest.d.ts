import { SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";
/**
 * The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
**/
export declare class WriteRequest extends SpeakeasyBase {
    labels?: Map<string, string>;
    streamId?: string;
    streamToken?: string;
    writes?: Write[];
}
