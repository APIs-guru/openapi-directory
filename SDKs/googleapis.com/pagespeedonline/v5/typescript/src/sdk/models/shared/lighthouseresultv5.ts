import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=audits", elemType: shared.LighthouseAuditResultV5 })
  audits?: Map<string, LighthouseAuditResultV5>;

  @Metadata({ data: "json, name=categories" })
  categories?: Categories;

  @Metadata({ data: "json, name=categoryGroups", elemType: shared.CategoryGroupV5 })
  categoryGroups?: Map<string, CategoryGroupV5>;

  @Metadata({ data: "json, name=configSettings" })
  configSettings?: ConfigSettings;

  @Metadata({ data: "json, name=environment" })
  environment?: Environment;

  @Metadata({ data: "json, name=fetchTime" })
  fetchTime?: string;

  @Metadata({ data: "json, name=finalUrl" })
  finalUrl?: string;

  @Metadata({ data: "json, name=i18n" })
  i18n?: I18n;

  @Metadata({ data: "json, name=lighthouseVersion" })
  lighthouseVersion?: string;

  @Metadata({ data: "json, name=requestedUrl" })
  requestedUrl?: string;

  @Metadata({ data: "json, name=runWarnings" })
  runWarnings?: any[];

  @Metadata({ data: "json, name=runtimeError" })
  runtimeError?: RuntimeError;

  @Metadata({ data: "json, name=stackPacks", elemType: shared.StackPack })
  stackPacks?: StackPack[];

  @Metadata({ data: "json, name=timing" })
  timing?: Timing;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
