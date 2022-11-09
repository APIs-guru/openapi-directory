import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageMetaData } from "./pagemetadata";
import { SentryImpactRiskObject } from "./sentryimpactriskobject";


export class SentryObjectPagingDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=page" })
  page?: PageMetaData;

  @Metadata({ data: "json, name=sentry_objects", elemType: shared.SentryImpactRiskObject })
  sentryObjects?: SentryImpactRiskObject[];
}
