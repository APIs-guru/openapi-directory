import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A deleted episode or podcast.
 * An episode or a podcast could be deleted from our podcast database.
 * Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
 *
**/
export declare class DeletedItem extends SpeakeasyBase {
    error?: string;
    id?: string;
    status?: string;
    title?: string;
}
