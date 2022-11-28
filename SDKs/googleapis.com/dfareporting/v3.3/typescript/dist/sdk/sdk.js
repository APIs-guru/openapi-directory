import axios from "axios";
import * as utils from "../internal/utils";
import { AccountActiveAdSummaries } from "./accountactiveadsummaries";
import { AccountPermissionGroups } from "./accountpermissiongroups";
import { AccountPermissions } from "./accountpermissions";
import { AccountUserProfiles } from "./accountuserprofiles";
import { Accounts } from "./accounts";
import { Ads } from "./ads";
import { AdvertiserGroups } from "./advertisergroups";
import { AdvertiserLandingPages } from "./advertiserlandingpages";
import { Advertisers } from "./advertisers";
import { Browsers } from "./browsers";
import { CampaignCreativeAssociations } from "./campaigncreativeassociations";
import { Campaigns } from "./campaigns";
import { ChangeLogs } from "./changelogs";
import { Cities } from "./cities";
import { ConnectionTypes } from "./connectiontypes";
import { ContentCategories } from "./contentcategories";
import { Conversions } from "./conversions";
import { Countries } from "./countries";
import { CreativeAssets } from "./creativeassets";
import { CreativeFieldValues } from "./creativefieldvalues";
import { CreativeFields } from "./creativefields";
import { CreativeGroups } from "./creativegroups";
import { Creatives } from "./creatives";
import { DimensionValues } from "./dimensionvalues";
import { DirectorySites } from "./directorysites";
import { DynamicTargetingKeys } from "./dynamictargetingkeys";
import { EventTags } from "./eventtags";
import { Files } from "./files";
import { FloodlightActivities } from "./floodlightactivities";
import { FloodlightActivityGroups } from "./floodlightactivitygroups";
import { FloodlightConfigurations } from "./floodlightconfigurations";
import { InventoryItems } from "./inventoryitems";
import { Languages } from "./languages";
import { Metros } from "./metros";
import { MobileApps } from "./mobileapps";
import { MobileCarriers } from "./mobilecarriers";
import { OperatingSystemVersions } from "./operatingsystemversions";
import { OperatingSystems } from "./operatingsystems";
import { OrderDocuments } from "./orderdocuments";
import { Orders } from "./orders";
import { PlacementGroups } from "./placementgroups";
import { PlacementStrategies } from "./placementstrategies";
import { Placements } from "./placements";
import { PlatformTypes } from "./platformtypes";
import { PostalCodes } from "./postalcodes";
import { Projects } from "./projects";
import { Regions } from "./regions";
import { RemarketingListShares } from "./remarketinglistshares";
import { RemarketingLists } from "./remarketinglists";
import { Reports } from "./reports";
import { Sites } from "./sites";
import { Sizes } from "./sizes";
import { Subaccounts } from "./subaccounts";
import { TargetableRemarketingLists } from "./targetableremarketinglists";
import { TargetingTemplates } from "./targetingtemplates";
import { UserProfiles } from "./userprofiles";
import { UserRolePermissionGroups } from "./userrolepermissiongroups";
import { UserRolePermissions } from "./userrolepermissions";
import { UserRoles } from "./userroles";
import { VideoFormats } from "./videoformats";
export var ServerList = [
    "https://dfareporting.googleapis.com/dfareporting/v3.3",
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
/* SDK Documentation: https://developers.google.com/doubleclick-advertisers/*/
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
        this.accountActiveAdSummaries = new AccountActiveAdSummaries(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accountPermissionGroups = new AccountPermissionGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accountPermissions = new AccountPermissions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accountUserProfiles = new AccountUserProfiles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accounts = new Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ads = new Ads(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.advertiserGroups = new AdvertiserGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.advertiserLandingPages = new AdvertiserLandingPages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.advertisers = new Advertisers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.browsers = new Browsers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.campaignCreativeAssociations = new CampaignCreativeAssociations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.campaigns = new Campaigns(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.changeLogs = new ChangeLogs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.cities = new Cities(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.connectionTypes = new ConnectionTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.contentCategories = new ContentCategories(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.conversions = new Conversions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.countries = new Countries(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creativeAssets = new CreativeAssets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creativeFieldValues = new CreativeFieldValues(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creativeFields = new CreativeFields(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creativeGroups = new CreativeGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.creatives = new Creatives(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dimensionValues = new DimensionValues(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.directorySites = new DirectorySites(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dynamicTargetingKeys = new DynamicTargetingKeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.eventTags = new EventTags(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.files = new Files(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floodlightActivities = new FloodlightActivities(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floodlightActivityGroups = new FloodlightActivityGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floodlightConfigurations = new FloodlightConfigurations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inventoryItems = new InventoryItems(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languages = new Languages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.metros = new Metros(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mobileApps = new MobileApps(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.mobileCarriers = new MobileCarriers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.operatingSystemVersions = new OperatingSystemVersions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.operatingSystems = new OperatingSystems(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderDocuments = new OrderDocuments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orders = new Orders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.placementGroups = new PlacementGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.placementStrategies = new PlacementStrategies(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.placements = new Placements(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.platformTypes = new PlatformTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.postalCodes = new PostalCodes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projects = new Projects(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.regions = new Regions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.remarketingListShares = new RemarketingListShares(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.remarketingLists = new RemarketingLists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.reports = new Reports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sites = new Sites(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sizes = new Sizes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.subaccounts = new Subaccounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.targetableRemarketingLists = new TargetableRemarketingLists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.targetingTemplates = new TargetingTemplates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userProfiles = new UserProfiles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userRolePermissionGroups = new UserRolePermissionGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userRolePermissions = new UserRolePermissions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userRoles = new UserRoles(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videoFormats = new VideoFormats(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
