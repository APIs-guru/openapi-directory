import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Errors } from "./errors";
import { GmbAccounts } from "./gmbaccounts";
import { LiaSettings } from "./liasettings";
import { PosDataProviders } from "./posdataproviders";


export class LiasettingsCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=gmbAccounts" })
  gmbAccounts?: GmbAccounts;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=liaSettings" })
  liaSettings?: LiaSettings;

  @Metadata({ data: "json, name=posDataProviders", elemType: shared.PosDataProviders })
  posDataProviders?: PosDataProviders[];
}
