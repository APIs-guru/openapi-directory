import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostcodeTypeEnum } from "./postcodetypeenum";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=administrative_county" })
  administrativeCounty?: string;

  @Metadata({ data: "json, name=building_name" })
  buildingName?: string;

  @Metadata({ data: "json, name=building_number" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=delivery_point_suffix" })
  deliveryPointSuffix?: string;

  @Metadata({ data: "json, name=department_name" })
  departmentName?: string;

  @Metadata({ data: "json, name=dependent_locality" })
  dependentLocality?: string;

  @Metadata({ data: "json, name=dependent_thoroughfare" })
  dependentThoroughfare?: string;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=double_dependent_locality" })
  doubleDependentLocality?: string;

  @Metadata({ data: "json, name=eastings" })
  eastings?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=line_1" })
  line1?: string;

  @Metadata({ data: "json, name=line_2" })
  line2?: string;

  @Metadata({ data: "json, name=line_3" })
  line3?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=northings" })
  northings?: number;

  @Metadata({ data: "json, name=organisation_name" })
  organisationName?: string;

  @Metadata({ data: "json, name=po_box" })
  poBox?: string;

  @Metadata({ data: "json, name=post_town" })
  postTown?: string;

  @Metadata({ data: "json, name=postal_county" })
  postalCounty?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=postcode_inward" })
  postcodeInward?: string;

  @Metadata({ data: "json, name=postcode_outward" })
  postcodeOutward?: string;

  @Metadata({ data: "json, name=postcode_type" })
  postcodeType?: PostcodeTypeEnum;

  @Metadata({ data: "json, name=premise" })
  premise?: string;

  @Metadata({ data: "json, name=su_organisation_indicator" })
  suOrganisationIndicator?: string;

  @Metadata({ data: "json, name=sub_building_name" })
  subBuildingName?: string;

  @Metadata({ data: "json, name=thoroughfare" })
  thoroughfare?: string;

  @Metadata({ data: "json, name=traditional_county" })
  traditionalCounty?: string;

  @Metadata({ data: "json, name=udprn" })
  udprn?: number;

  @Metadata({ data: "json, name=umprn" })
  umprn?: string;

  @Metadata({ data: "json, name=ward" })
  ward?: string;
}
