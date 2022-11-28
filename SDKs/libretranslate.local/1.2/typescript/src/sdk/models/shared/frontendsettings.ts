import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FrontendSettingsLanguageSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  name?: string;
}


export class FrontendSettingsLanguageTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  name?: string;
}


export class FrontendSettingsLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  source?: FrontendSettingsLanguageSource;

  @SpeakeasyMetadata()
  target?: FrontendSettingsLanguageTarget;
}


export class FrontendSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  charLimit?: number;

  @SpeakeasyMetadata()
  frontendTimeout?: number;

  @SpeakeasyMetadata()
  language?: FrontendSettingsLanguage;
}
