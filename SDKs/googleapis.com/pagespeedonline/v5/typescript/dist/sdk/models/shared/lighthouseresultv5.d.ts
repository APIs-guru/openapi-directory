import { SpeakeasyBase } from "../../../internal/utils";
import { LighthouseAuditResultV5 } from "./lighthouseauditresultv5";
import { Categories } from "./categories";
import { CategoryGroupV5 } from "./categorygroupv5";
import { ConfigSettings } from "./configsettings";
import { Environment } from "./environment";
import { I18n } from "./i18n";
import { RuntimeError } from "./runtimeerror";
import { StackPack } from "./stackpack";
import { Timing } from "./timing";
/**
 * The Lighthouse result object.
**/
export declare class LighthouseResultV5 extends SpeakeasyBase {
    audits?: Map<string, LighthouseAuditResultV5>;
    categories?: Categories;
    categoryGroups?: Map<string, CategoryGroupV5>;
    configSettings?: ConfigSettings;
    environment?: Environment;
    fetchTime?: string;
    finalUrl?: string;
    i18n?: I18n;
    lighthouseVersion?: string;
    requestedUrl?: string;
    runWarnings?: any[];
    runtimeError?: RuntimeError;
    stackPacks?: StackPack[];
    timing?: Timing;
    userAgent?: string;
}
