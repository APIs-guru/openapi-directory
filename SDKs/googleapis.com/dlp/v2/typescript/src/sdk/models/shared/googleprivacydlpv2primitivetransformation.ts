import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GooglePrivacyDlpV2PrimitiveTransformation
/** 
 * A rule for transforming a value.
**/
export class GooglePrivacyDlpV2PrimitiveTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketingConfig" })
  bucketingConfig?: GooglePrivacyDlpV2BucketingConfig;

  @SpeakeasyMetadata({ data: "json, name=characterMaskConfig" })
  characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig;

  @SpeakeasyMetadata({ data: "json, name=cryptoDeterministicConfig" })
  cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig;

  @SpeakeasyMetadata({ data: "json, name=cryptoHashConfig" })
  cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig;

  @SpeakeasyMetadata({ data: "json, name=cryptoReplaceFfxFpeConfig" })
  cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;

  @SpeakeasyMetadata({ data: "json, name=dateShiftConfig" })
  dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig;

  @SpeakeasyMetadata({ data: "json, name=fixedSizeBucketingConfig" })
  fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig;

  @SpeakeasyMetadata({ data: "json, name=redactConfig" })
  redactConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=replaceConfig" })
  replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig;

  @SpeakeasyMetadata({ data: "json, name=replaceDictionaryConfig" })
  replaceDictionaryConfig?: GooglePrivacyDlpV2ReplaceDictionaryConfig;

  @SpeakeasyMetadata({ data: "json, name=replaceWithInfoTypeConfig" })
  replaceWithInfoTypeConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timePartConfig" })
  timePartConfig?: GooglePrivacyDlpV2TimePartConfig;
}
