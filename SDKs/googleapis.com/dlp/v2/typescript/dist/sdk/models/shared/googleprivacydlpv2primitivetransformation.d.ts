import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BucketingConfig } from "./googleprivacydlpv2bucketingconfig";
import { GooglePrivacyDlpV2CharacterMaskConfig } from "./googleprivacydlpv2charactermaskconfig";
import { GooglePrivacyDlpV2CryptoDeterministicConfig } from "./googleprivacydlpv2cryptodeterministicconfig";
import { GooglePrivacyDlpV2CryptoHashConfig } from "./googleprivacydlpv2cryptohashconfig";
import { GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig } from "./googleprivacydlpv2cryptoreplaceffxfpeconfig";
import { GooglePrivacyDlpV2DateShiftConfig } from "./googleprivacydlpv2dateshiftconfig";
import { GooglePrivacyDlpV2FixedSizeBucketingConfig } from "./googleprivacydlpv2fixedsizebucketingconfig";
import { GooglePrivacyDlpV2ReplaceValueConfig } from "./googleprivacydlpv2replacevalueconfig";
import { GooglePrivacyDlpV2ReplaceDictionaryConfig } from "./googleprivacydlpv2replacedictionaryconfig";
import { GooglePrivacyDlpV2TimePartConfig } from "./googleprivacydlpv2timepartconfig";
/**
 * A rule for transforming a value.
**/
export declare class GooglePrivacyDlpV2PrimitiveTransformation extends SpeakeasyBase {
    bucketingConfig?: GooglePrivacyDlpV2BucketingConfig;
    characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig;
    cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig;
    cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig;
    cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
    dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig;
    fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig;
    redactConfig?: Map<string, any>;
    replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig;
    replaceDictionaryConfig?: GooglePrivacyDlpV2ReplaceDictionaryConfig;
    replaceWithInfoTypeConfig?: Map<string, any>;
    timePartConfig?: GooglePrivacyDlpV2TimePartConfig;
}
