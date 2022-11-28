import { SpeakeasyBase } from "../../../internal/utils";
import { Feed } from "./feed";
/**
 * Create asset feed request.
**/
export declare class CreateFeedRequest extends SpeakeasyBase {
    feed?: Feed;
    feedId?: string;
}
