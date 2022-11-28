import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageMetaData } from "./pagemetadata";
import { SentryImpactRiskObject } from "./sentryimpactriskobject";



export class SentryObjectPagingDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: PageMetaData;

  @SpeakeasyMetadata({ data: "json, name=sentry_objects", elemType: SentryImpactRiskObject })
  sentryObjects?: SentryImpactRiskObject[];
}
