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
export var MessagesWebhooksEndpointTypeEnum;
(function (MessagesWebhooksEndpointTypeEnum) {
    MessagesWebhooksEndpointTypeEnum["InboundUrl"] = "inbound_url";
    MessagesWebhooksEndpointTypeEnum["StatusUrl"] = "status_url";
})(MessagesWebhooksEndpointTypeEnum || (MessagesWebhooksEndpointTypeEnum = {}));
export var MessagesWebhooksHttpMethodEnum;
(function (MessagesWebhooksHttpMethodEnum) {
    MessagesWebhooksHttpMethodEnum["Get"] = "GET";
    MessagesWebhooksHttpMethodEnum["Post"] = "POST";
})(MessagesWebhooksHttpMethodEnum || (MessagesWebhooksHttpMethodEnum = {}));
var MessagesWebhooks = /** @class */ (function (_super) {
    __extends(MessagesWebhooks, _super);
    function MessagesWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], MessagesWebhooks.prototype, "endpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=endpoint_type" }),
        __metadata("design:type", String)
    ], MessagesWebhooks.prototype, "endpointType", void 0);
    __decorate([
        Metadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], MessagesWebhooks.prototype, "httpMethod", void 0);
    return MessagesWebhooks;
}(SpeakeasyBase));
export { MessagesWebhooks };
// Messages
/**
 * The Nexmo product that you access with this application.
**/
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=webhooks", elemType: shared.MessagesWebhooks }),
        __metadata("design:type", Array)
    ], Messages.prototype, "webhooks", void 0);
    return Messages;
}(SpeakeasyBase));
export { Messages };
