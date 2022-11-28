

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://apirest.isendpro.com/cgi-bin",
	"http://apirest.isendpro.com/cgi-bin",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def add_shortlink(self, request: operations.AddShortlinkRequest) -> operations.AddShortlinkResponse:
        r"""add a shortlink
        add a shortlink
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shortlink"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddShortlinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShortlinkResponse])
                res.shortlink_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def comptage(self, request: operations.ComptageRequest) -> operations.ComptageResponse:
        r"""Compter le nombre de caractère 
        Compte le nombre de SMS necessaire à un envoi
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/comptage"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComptageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComptageReponse])
                res.comptage_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def del_liste_noire(self, request: operations.DelListeNoireRequest) -> operations.DelListeNoireResponse:
        r"""Ajoute un numero en liste noire
        Supprime un numero en liste noire
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dellistenoire"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DelListeNoireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListenoireReponse])
                res.listenoire_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def get_campagne(self, request: operations.GetCampagneRequest) -> operations.GetCampagneResponse:
        r"""Retourne les SMS envoyés sur une période donnée
        Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 
        
        Les dates sont au format YYYY-MM-DD hh:mm. 
        
        Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/campagne"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCampagneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_campagne_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "file"):
                res.get_campagne_200_file_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out
            if utils.match_content_type(content_type, "file"):
                res.body = r.content

        return res

    
    def get_credit(self, request: operations.GetCreditRequest) -> operations.GetCreditResponse:
        r"""Interrogation credit
        Retourne le credit existant associe au compte.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/credit"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreditResponse])
                res.credit_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def get_hlr(self, request: operations.GetHlrRequest) -> operations.GetHlrResponse:
        r"""Vérifier la validité d'un numéro
        Réalise un lookup HLR sur les numéros 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hlr"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HlrReponse])
                res.hlr_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def get_liste_noire(self, request: operations.GetListeNoireRequest) -> operations.GetListeNoireResponse:
        r"""Retourne le liste noire
        Retourne un fichier csv zippé contenant la liste noire
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getlistenoire"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListeNoireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_liste_noire_200_application_json_binary_string = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def repertoire(self, request: operations.RepertoireRequest) -> operations.RepertoireResponse:
        r"""Gestion repertoire (modification)
        Ajoute ou supprime une liste de numéros à un répertoire existant.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repertoire"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RepertoireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepertoirEmodifreponse])
                res.repertoir_emodifreponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def repertoire_crea(self, request: operations.RepertoireCreaRequest) -> operations.RepertoireCreaResponse:
        r"""Gestion repertoire (creation)
        Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repertoire"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RepertoireCreaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepertoirEcreatereponse])
                res.repertoir_ecreatereponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def send_sms(self, request: operations.SendSmsRequest) -> operations.SendSmsResponse:
        r"""Envoyer un sms
        Envoi un sms vers un unique destinataire
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sms"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendSmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmsReponse])
                res.sms_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def send_sms_multi(self, request: operations.SendSmsMultiRequest) -> operations.SendSmsMultiResponse:
        r"""Envoyer des SMS
        Envoi de SMS vers 1 ou plusieurs destinataires
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/smsmulti"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendSmsMultiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmsReponse])
                res.sms_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def set_liste_noire(self, request: operations.SetListeNoireRequest) -> operations.SetListeNoireResponse:
        r"""Ajoute un numero en liste noire
        Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setlistenoire"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetListeNoireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListenoireReponse])
                res.listenoire_reponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def subaccount_add(self, request: operations.SubaccountAddRequest) -> operations.SubaccountAddResponse:
        r"""Ajoute un sous compte
        Ajoute un sous compte
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subaccount"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubaccountAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubaccountAddResponse])
                res.subaccount_add_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def subaccount_edit(self, request: operations.SubaccountEditRequest) -> operations.SubaccountEditResponse:
        r"""Edit a subaccount
        Edit a subaccount
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subaccount"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubaccountEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubaccountResponse])
                res.subaccount_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    