var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
// GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
/**
 * Response message that is returned in ListClientStates.
**/
var GoogleAppsCloudidentityDevicesV1ListClientStatesResponse = /** @class */ (function (_super) {
    __extends(GoogleAppsCloudidentityDevicesV1ListClientStatesResponse, _super);
    function GoogleAppsCloudidentityDevicesV1ListClientStatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientStates", elemType: shared.GoogleAppsCloudidentityDevicesV1ClientState }),
        __metadata("design:type", Array)
    ], GoogleAppsCloudidentityDevicesV1ListClientStatesResponse.prototype, "clientStates", void 0);
    __decorate([
        Metadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ListClientStatesResponse.prototype, "nextPageToken", void 0);
    return GoogleAppsCloudidentityDevicesV1ListClientStatesResponse;
}(SpeakeasyBase));
export { GoogleAppsCloudidentityDevicesV1ListClientStatesResponse };
