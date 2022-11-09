import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta } from "./meta";
import { Campaign } from "./campaign";
export declare class CampaignWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: Campaign[];
}
