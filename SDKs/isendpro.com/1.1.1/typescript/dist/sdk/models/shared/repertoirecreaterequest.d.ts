import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RepertoirEcreaterequestRepertoireEditEnum {
    Create = "create"
}
export declare class RepertoirEcreaterequest extends SpeakeasyBase {
    keyid: string;
    repertoireEdit: RepertoirEcreaterequestRepertoireEditEnum;
    repertoireNom: string;
}
