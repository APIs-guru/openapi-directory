import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCampagneRapportCampagneEnum {
    One = "1"
}


export class GetCampagneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_deb" })
  dateDeb: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_fin" })
  dateFin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rapportCampagne" })
  rapportCampagne: GetCampagneRapportCampagneEnum;
}


export class GetCampagneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCampagneQueryParams;
}


export class GetCampagneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCampagne200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getCampagne200FileBinaryString?: Uint8Array;
}
