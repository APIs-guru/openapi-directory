import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RepertoirEcreaterequestRepertoireEditEnum {
    Create = "create"
}


export class RepertoirEcreaterequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=repertoireEdit" })
  repertoireEdit: RepertoirEcreaterequestRepertoireEditEnum;

  @SpeakeasyMetadata({ data: "json, name=repertoireNom" })
  repertoireNom: string;
}
