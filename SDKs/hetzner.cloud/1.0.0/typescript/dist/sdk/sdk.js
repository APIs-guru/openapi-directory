import axios from "axios";
import * as utils from "../internal/utils";
import { Actions } from "./actions";
import { CertificateActions } from "./certificateactions";
import { Certificates } from "./certificates";
import { Datacenters } from "./datacenters";
import { FirewallActions } from "./firewallactions";
import { Firewalls } from "./firewalls";
import { FloatingIpActions } from "./floatingipactions";
import { FloatingIPs } from "./floatingips";
import { IsOs } from "./isos";
import { ImageActions } from "./imageactions";
import { Images } from "./images";
import { LoadBalancerActions } from "./loadbalanceractions";
import { LoadBalancerTypes } from "./loadbalancertypes";
import { LoadBalancers } from "./loadbalancers";
import { Locations } from "./locations";
import { NetworkActions } from "./networkactions";
import { Networks } from "./networks";
import { PlacementGroups } from "./placementgroups";
import { Pricing } from "./pricing";
import { SshKeys } from "./sshkeys";
import { ServerActions } from "./serveractions";
import { ServerTypes } from "./servertypes";
import { Servers } from "./servers";
import { VolumeActions } from "./volumeactions";
import { Volumes } from "./volumes";
export var ServerList = [
    "https://api.hetzner.cloud/v1",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
        this.actions = new Actions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.certificateActions = new CertificateActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.certificates = new Certificates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.datacenters = new Datacenters(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.firewallActions = new FirewallActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.firewalls = new Firewalls(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floatingIpActions = new FloatingIpActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floatingIPs = new FloatingIPs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.isOs = new IsOs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.imageActions = new ImageActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.images = new Images(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.loadBalancerActions = new LoadBalancerActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.loadBalancerTypes = new LoadBalancerTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.loadBalancers = new LoadBalancers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.locations = new Locations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.networkActions = new NetworkActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.networks = new Networks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.placementGroups = new PlacementGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pricing = new Pricing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sshKeys = new SshKeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.serverActions = new ServerActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.serverTypes = new ServerTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.servers = new Servers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.volumeActions = new VolumeActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.volumes = new Volumes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
