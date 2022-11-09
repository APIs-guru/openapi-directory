import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCampagneRapportCampagneEnum {
    One = "1"
}


export class GetCampagneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_deb" })
  dateDeb: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_fin" })
  dateFin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rapportCampagne" })
  rapportCampagne: GetCampagneRapportCampagneEnum;
}


export class GetCampagneRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCampagneQueryParams;
}


export class GetCampagneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCampagne200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  getCampagne200FileBinaryString?: Uint8Array;
}
