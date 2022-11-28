import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GmbAccounts } from "./gmbaccounts";
import { LiaSettings } from "./liasettings";
import { PosDataProviders } from "./posdataproviders";



export class LiasettingsCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=gmbAccounts" })
  gmbAccounts?: GmbAccounts;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=liaSettings" })
  liaSettings?: LiaSettings;

  @SpeakeasyMetadata({ data: "json, name=posDataProviders", elemType: PosDataProviders })
  posDataProviders?: PosDataProviders[];
}
