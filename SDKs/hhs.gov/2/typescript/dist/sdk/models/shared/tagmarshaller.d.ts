import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TagLanguageMarshaller } from "./taglanguagemarshaller";
import { TagTypeMarshaller } from "./tagtypemarshaller";
export declare class TagMarshaller extends SpeakeasyBase {
    id?: number;
    language?: TagLanguageMarshaller;
    name?: string;
    type?: TagTypeMarshaller;
}
