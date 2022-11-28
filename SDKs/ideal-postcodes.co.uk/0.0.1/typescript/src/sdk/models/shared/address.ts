import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostcodeTypeEnum } from "./postcodetypeenum";



export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administrative_county" })
  administrativeCounty?: string;

  @SpeakeasyMetadata({ data: "json, name=building_name" })
  buildingName?: string;

  @SpeakeasyMetadata({ data: "json, name=building_number" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=delivery_point_suffix" })
  deliveryPointSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=department_name" })
  departmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=dependent_locality" })
  dependentLocality?: string;

  @SpeakeasyMetadata({ data: "json, name=dependent_thoroughfare" })
  dependentThoroughfare?: string;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=double_dependent_locality" })
  doubleDependentLocality?: string;

  @SpeakeasyMetadata({ data: "json, name=eastings" })
  eastings?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=line_1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line_2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line_3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=northings" })
  northings?: number;

  @SpeakeasyMetadata({ data: "json, name=organisation_name" })
  organisationName?: string;

  @SpeakeasyMetadata({ data: "json, name=po_box" })
  poBox?: string;

  @SpeakeasyMetadata({ data: "json, name=post_town" })
  postTown?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_county" })
  postalCounty?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode_inward" })
  postcodeInward?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode_outward" })
  postcodeOutward?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode_type" })
  postcodeType?: PostcodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=premise" })
  premise?: string;

  @SpeakeasyMetadata({ data: "json, name=su_organisation_indicator" })
  suOrganisationIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_building_name" })
  subBuildingName?: string;

  @SpeakeasyMetadata({ data: "json, name=thoroughfare" })
  thoroughfare?: string;

  @SpeakeasyMetadata({ data: "json, name=traditional_county" })
  traditionalCounty?: string;

  @SpeakeasyMetadata({ data: "json, name=udprn" })
  udprn?: number;

  @SpeakeasyMetadata({ data: "json, name=umprn" })
  umprn?: string;

  @SpeakeasyMetadata({ data: "json, name=ward" })
  ward?: string;
}
