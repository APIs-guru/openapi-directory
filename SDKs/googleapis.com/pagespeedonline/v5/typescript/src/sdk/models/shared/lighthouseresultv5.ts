import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LighthouseAuditResultV5 } from "./lighthouseauditresultv5";
import { Categories } from "./categories";
import { CategoryGroupV5 } from "./categorygroupv5";
import { ConfigSettings } from "./configsettings";
import { Environment } from "./environment";
import { I18n } from "./i18n";
import { RuntimeError } from "./runtimeerror";
import { StackPack } from "./stackpack";
import { Timing } from "./timing";



// LighthouseResultV5
/** 
 * The Lighthouse result object.
**/
export class LighthouseResultV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audits", elemType: LighthouseAuditResultV5 })
  audits?: Map<string, LighthouseAuditResultV5>;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: Categories;

  @SpeakeasyMetadata({ data: "json, name=categoryGroups", elemType: CategoryGroupV5 })
  categoryGroups?: Map<string, CategoryGroupV5>;

  @SpeakeasyMetadata({ data: "json, name=configSettings" })
  configSettings?: ConfigSettings;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=fetchTime" })
  fetchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=finalUrl" })
  finalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=i18n" })
  i18n?: I18n;

  @SpeakeasyMetadata({ data: "json, name=lighthouseVersion" })
  lighthouseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedUrl" })
  requestedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=runWarnings" })
  runWarnings?: any[];

  @SpeakeasyMetadata({ data: "json, name=runtimeError" })
  runtimeError?: RuntimeError;

  @SpeakeasyMetadata({ data: "json, name=stackPacks", elemType: StackPack })
  stackPacks?: StackPack[];

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: Timing;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
