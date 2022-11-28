import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GmbAccounts } from "./gmbaccounts";
import { LiaSettings } from "./liasettings";
import { PosDataProviders } from "./posdataproviders";
export declare class LiasettingsCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    gmbAccounts?: GmbAccounts;
    kind?: string;
    liaSettings?: LiaSettings;
    posDataProviders?: PosDataProviders[];
}
