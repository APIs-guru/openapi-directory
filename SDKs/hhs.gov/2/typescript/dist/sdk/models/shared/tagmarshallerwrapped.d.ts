import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { TagMarshaller } from "./tagmarshaller";
export declare class TagMarshallerWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: TagMarshaller[];
}
