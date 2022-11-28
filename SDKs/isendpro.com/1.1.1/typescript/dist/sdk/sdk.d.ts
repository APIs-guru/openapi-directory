import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apirest.isendpro.com/cgi-bin", "http://apirest.isendpro.com/cgi-bin"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addShortlink - add a shortlink
     *
     * add a shortlink
    **/
    addShortlink(req: operations.AddShortlinkRequest, config?: AxiosRequestConfig): Promise<operations.AddShortlinkResponse>;
    /**
     * comptage - Compter le nombre de caractère
     *
     * Compte le nombre de SMS necessaire à un envoi
    **/
    comptage(req: operations.ComptageRequest, config?: AxiosRequestConfig): Promise<operations.ComptageResponse>;
    /**
     * delListeNoire - Ajoute un numero en liste noire
     *
     * Supprime un numero en liste noire
    **/
    delListeNoire(req: operations.DelListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.DelListeNoireResponse>;
    /**
     * getCampagne - Retourne les SMS envoyés sur une période donnée
     *
     * Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin.
     *
     * Les dates sont au format YYYY-MM-DD hh:mm.
     *
     * Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
     *
    **/
    getCampagne(req: operations.GetCampagneRequest, config?: AxiosRequestConfig): Promise<operations.GetCampagneResponse>;
    /**
     * getCredit - Interrogation credit
     *
     * Retourne le credit existant associe au compte.
     *
    **/
    getCredit(req: operations.GetCreditRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditResponse>;
    /**
     * getHlr - Vérifier la validité d'un numéro
     *
     * Réalise un lookup HLR sur les numéros
     *
    **/
    getHlr(req: operations.GetHlrRequest, config?: AxiosRequestConfig): Promise<operations.GetHlrResponse>;
    /**
     * getListeNoire - Retourne le liste noire
     *
     * Retourne un fichier csv zippé contenant la liste noire
    **/
    getListeNoire(req: operations.GetListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.GetListeNoireResponse>;
    /**
     * repertoire - Gestion repertoire (modification)
     *
     * Ajoute ou supprime une liste de numéros à un répertoire existant.
    **/
    repertoire(req: operations.RepertoireRequest, config?: AxiosRequestConfig): Promise<operations.RepertoireResponse>;
    /**
     * repertoireCrea - Gestion repertoire (creation)
     *
     * Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
    **/
    repertoireCrea(req: operations.RepertoireCreaRequest, config?: AxiosRequestConfig): Promise<operations.RepertoireCreaResponse>;
    /**
     * sendSms - Envoyer un sms
     *
     * Envoi un sms vers un unique destinataire
    **/
    sendSms(req: operations.SendSmsRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsResponse>;
    /**
     * sendSmsMulti - Envoyer des SMS
     *
     * Envoi de SMS vers 1 ou plusieurs destinataires
     *
    **/
    sendSmsMulti(req: operations.SendSmsMultiRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsMultiResponse>;
    /**
     * setListeNoire - Ajoute un numero en liste noire
     *
     * Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.
    **/
    setListeNoire(req: operations.SetListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.SetListeNoireResponse>;
    /**
     * subaccountAdd - Ajoute un sous compte
     *
     * Ajoute un sous compte
    **/
    subaccountAdd(req: operations.SubaccountAddRequest, config?: AxiosRequestConfig): Promise<operations.SubaccountAddResponse>;
    /**
     * subaccountEdit - Edit a subaccount
     *
     * Edit a subaccount
    **/
    subaccountEdit(req: operations.SubaccountEditRequest, config?: AxiosRequestConfig): Promise<operations.SubaccountEditResponse>;
}
export {};
