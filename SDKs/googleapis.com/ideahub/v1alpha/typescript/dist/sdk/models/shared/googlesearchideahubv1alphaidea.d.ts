import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaTopic } from "./googlesearchideahubv1alphatopic";
/**
 * A single Idea that we want to show the end user.
**/
export declare class GoogleSearchIdeahubV1alphaIdea extends SpeakeasyBase {
    name?: string;
    text?: string;
    topics?: GoogleSearchIdeahubV1alphaTopic[];
}
