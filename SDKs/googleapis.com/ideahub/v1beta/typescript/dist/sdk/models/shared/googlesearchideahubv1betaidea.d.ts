import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaTopic } from "./googlesearchideahubv1betatopic";
/**
 * A single Idea that we want to show the end user.
**/
export declare class GoogleSearchIdeahubV1betaIdea extends SpeakeasyBase {
    name?: string;
    text?: string;
    topics?: GoogleSearchIdeahubV1betaTopic[];
}
