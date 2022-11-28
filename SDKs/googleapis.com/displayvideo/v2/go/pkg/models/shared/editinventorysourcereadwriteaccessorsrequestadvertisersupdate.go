package shared

// EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate
// Update to the list of advertisers with read/write access to the inventory source.
type EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate struct {
	AddedAdvertisers   []string `json:"addedAdvertisers,omitempty"`
	RemovedAdvertisers []string `json:"removedAdvertisers,omitempty"`
}
