import { SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";
export declare class LiasettingsCustomBatchRequestEntry extends SpeakeasyBase {
    accountId?: string;
    batchId?: number;
    contactEmail?: string;
    contactName?: string;
    country?: string;
    gmbEmail?: string;
    liaSettings?: LiaSettings;
    merchantId?: string;
    method?: string;
    posDataProviderId?: string;
    posExternalAccountId?: string;
}
