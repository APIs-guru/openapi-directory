import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerCreateMaintenancePreferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerCreateMaintenancePreferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerCreateMaintenancePreferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerCreateMaintenancePreferencePathParams;

  @Metadata()
  queryParams: LandlordControllerCreateMaintenancePreferenceQueryParams;
}


export class LandlordControllerCreateMaintenancePreferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordControllerCreateMaintenancePreference200ApplicationJsonString?: string;

  @Metadata()
  landlordControllerCreateMaintenancePreference200ApplicationXmlString?: string;

  @Metadata()
  landlordControllerCreateMaintenancePreference200TextJsonString?: string;

  @Metadata()
  landlordControllerCreateMaintenancePreference200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
