import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { SyndicateMarshaller } from "./syndicatemarshaller";
export declare class SyndicateMarshallerWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: SyndicateMarshaller[];
}
